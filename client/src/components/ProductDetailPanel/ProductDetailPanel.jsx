import React from 'react';
import { useSelector } from 'react-redux';
import products from '../../reducers/products';
import { useEffect } from 'react';
import { useState } from 'react';
import { getProductDetailByClickAction } from '../../actions/productActions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCartAction } from '../../actions/cartItemActions';
import { useLocation } from 'react-router-dom';


const ProductDetailPanel = () => {
    const dispatch=useDispatch();
    const selectedProductStore=useSelector(state=>state.selectedProduct);
    const currentUserStore=useSelector(state=>state.currentUser);

    const [selectedProduct,setSelectedProduct]=useState({
        name:'Loading...',
        description:'',
        image:'',
        price:'0',
        unitInStock:99,
    });

    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
    useEffect(()=>{
        console.log("id:"+id);
        dispatch(getProductDetailByClickAction(id));
    },[]);
    useEffect(()=>{
        if(selectedProductStore){
            setSelectedProduct(selectedProductStore);
        }
        
    },[selectedProductStore]);
    //useSelector
    function handleAddToCart(){
        //user store doesn't have id, bug!!
        dispatch(addToCartAction(currentUserStore.user.id,selectedProductStore.id,document.getElementById("item-quantity").value))
    }
    return (<main>
        {/* breadcrumb area start */}
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="product-details.html">shop</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">product details</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* breadcrumb area end */}
        {/* page main wrapper start */}
        <div className="shop-main-wrapper pt-40">
            <div className="container">
                <div className="row">
                    {/* product details wrapper start */}
                    <div className="col-lg-12 order-1 order-lg-2">
                        {/* product details inner end */}
                        <div className="product-details-inner">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="product-large-slider img-zoom mb-20">
                                        <div className="pro-large-img">
                                            {/* <img src="assets/img/product/product-details-img1.jpg" alt="" /> */}
                                            <img src={selectedProduct.image} alt="product image" />
                                        </div>
                                        {/* <div className="pro-large-img">
                                            <img src="assets/img/product/product-details-img2.jpg" alt="" />
                                        </div>
                                        <div className="pro-large-img">
                                            <img src="assets/img/product/product-details-img3.jpg" alt="" />
                                        </div>
                                        <div className="pro-large-img">
                                            <img src="assets/img/product/product-details-img4.jpg" alt="" />
                                        </div> */}
                                    </div>
                                    <div className="pro-nav slick-row-10 slick-arrow-style">
                                        <div className="pro-nav-thumb">
                                            {/* <img src="assets/img/product/product-details-img1.jpg" alt="" /> */}
                                            <img src={selectedProduct.image} alt="product image" />
                                        </div>
                                        {/* <div className="pro-nav-thumb">
                                            <img src="assets/img/product/product-details-img2.jpg" alt="" />
                                        </div>
                                        <div className="pro-nav-thumb">
                                            <img src="assets/img/product/product-details-img3.jpg" alt="" />
                                        </div>
                                        <div className="pro-nav-thumb">
                                            <img src="assets/img/product/product-details-img4.jpg" alt="" />
                                        </div>
                                        <div className="pro-nav-thumb">
                                            <img src="assets/img/product/product-details-img5.jpg" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="product-details-des">
                                        <h5 className="product-name"><a href="product-details.html">{selectedProduct.name}</a></h5>
                                        <div className="ratings">
                                            <span><i className="ion-android-star" /></span>
                                            <span><i className="ion-android-star" /></span>
                                            <span><i className="ion-android-star" /></span>
                                            <span><i className="ion-android-star" /></span>
                                            <span><i className="ion-android-star" /></span>
                                            <div className="pro-review">
                                                <span>1 review(s)</span>
                                            </div>
                                        </div>
                                        <div className="price-box">
                                            <span className="price-old"><del>${selectedProduct.price*1.1}</del></span>
                                            <span className="price-regular">${selectedProduct.price}</span>
                                        </div>
                                        <p>{selectedProduct.description}</p>
                                        <div className="availability mt-10 mb-20">
                                            <i className="ion-checkmark-circled" />
                                            <span>{selectedProduct.unitsInStock}</span>
                                        </div>
                                        <div className="quantity-cart-box d-flex align-items-center">
                                            <div className="quantity">
                                                <div className="pro-qty" ><input id='item-quantity' type="text" defaultValue={1} /></div>
                                            </div>
                                            <div className="action_link">
                                                <a className="buy-btn" href="#" onClick={handleAddToCart}><i className="ion-bag" />Add to cart</a>
                                            </div>
                                        </div>
                                        <div className="pro-size mb-26 mt-26">
                                            <h5>size :</h5>
                                            <select className="nice-select">
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                        </div>
                                        <div className="color-option mb-26">
                                            <h5>color :</h5>
                                            <select className="nice-select">
                                                <option>Golden</option>
                                                <option>White</option>
                                                <option>Blue</option>
                                                <option>Pink</option>
                                            </select>
                                        </div>
                                        <div className="useful-links mt-28">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Compare"><i className="ion-ios-shuffle" />compare</a>
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist"><i className="ion-android-favorite-outline" />wishlist</a>
                                        </div>
                                        <div className="tag-line mt-18">
                                            <h5>tags:</h5>
                                            <a href="#">fashion</a>
                                            <a href="#">barber</a>
                                        </div>
                                        <div className="like-icon mt-20">
                                            <a className="facebook" href="#"><i className="fa fa-facebook" />like</a>
                                            <a className="twitter" href="#"><i className="fa fa-twitter" />tweet</a>
                                            <a className="pinterest" href="#"><i className="fa fa-pinterest" />save</a>
                                            <a className="google" href="#"><i className="fa fa-google-plus" />share</a>
                                        </div>
                                        <div className="share-icon mt-18">
                                            <h5>share product:</h5>
                                            <a href="#"><i className="fa fa-facebook" /></a>
                                            <a href="#"><i className="fa fa-twitter" /></a>
                                            <a href="#"><i className="fa fa-pinterest" /></a>
                                            <a href="#"><i className="fa fa-google-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product details inner end */}
                        {/* product details reviews start */}
                        <div className="product-details-reviews pt-32">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product-review-info">
                                        <ul className="nav review-tab">
                                            <li>
                                                <a className="active" data-bs-toggle="tab" href="#tab_one">description</a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#tab_two">information</a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#tab_three">reviews (1)</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content reviews-tab">
                                            <div className="tab-pane fade show active" id="tab_one">
                                                <div className="tab-one">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                        fringilla augue nec est tristique auctor. Ipsum metus feugiat
                                                        sem, quis fermentum turpis eros eget velit. Donec ac tempus
                                                        ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
                                                        sagittis vulputate, sapien libero hendrerit est, sed commodo
                                                        augue nisi non neque.Cras neque metus, consequat et blandit et,
                                                        luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
                                                        ligula euismod eget. Pellentesque habitant morbi tristique
                                                        senectus et netus et malesuada fames ac turpis egestas. Nam
                                                        erat mi, rutrum at sollicitudin rhoncus</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab_two">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                    <tr>
                                                        <td>color</td>
                                                        <td>black, blue, red</td>
                                                    </tr>
                                                    <tr>
                                                        <td>size</td>
                                                        <td>L, M, S</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade" id="tab_three">
                                                <form action="#" className="review-form">
                                                    <h5>1 review for <span>Chaz Kangeroo</span></h5>
                                                    <div className="total-reviews">
                                                        <div className="rev-avatar">
                                                            <img src="assets/img/about/avatar.jpg" alt="" />
                                                        </div>
                                                        <div className="review-box">
                                                            <div className="ratings">
                                                                <span className="good"><i className="fa fa-star" /></span>
                                                                <span className="good"><i className="fa fa-star" /></span>
                                                                <span className="good"><i className="fa fa-star" /></span>
                                                                <span className="good"><i className="fa fa-star" /></span>
                                                                <span><i className="fa fa-star" /></span>
                                                            </div>
                                                            <div className="post-author">
                                                                <p><span>admin -</span> 30 Nov, 2018</p>
                                                            </div>
                                                            <p>Aliquam fringilla euismod risus ac bibendum. Sed sit
                                                                amet sem varius ante feugiat lacinia. Nunc ipsum nulla,
                                                                vulputate ut venenatis vitae, malesuada ut mi. Quisque
                                                                iaculis, dui congue placerat pretium, augue erat
                                                                accumsan lacus</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Your Name</label>
                                                            <input type="text" className="form-control" required />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Your Email</label>
                                                            <input type="email" className="form-control" required />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Your Review</label>
                                                            <textarea className="form-control" required defaultValue={""} />
                                                            <div className="help-block pt-10"><span className="text-danger">Note:</span>
                                                                HTML is not translated!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Rating</label>
                                                            &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                                            <input type="radio" defaultValue={1} name="rating" />
                                                            &nbsp;
                                                            <input type="radio" defaultValue={2} name="rating" />
                                                            &nbsp;
                                                            <input type="radio" defaultValue={3} name="rating" />
                                                            &nbsp;
                                                            <input type="radio" defaultValue={4} name="rating" />
                                                            &nbsp;
                                                            <input type="radio" defaultValue={5} name="rating" defaultChecked />
                                                            &nbsp;Good
                                                        </div>
                                                    </div>
                                                    <div className="buttons">
                                                        <button className="sqr-btn" type="submit">Continue</button>
                                                    </div>
                                                </form> {/* end of review-form */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product details reviews end */}
                    </div>
                    {/* product details wrapper end */}
                </div>
            </div>
        </div>
        {/* page main wrapper end */}
        {/* product feature start */}
        <div className="related-product pt-40 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-header-wrap">
                            {/* section title start */}
                            <div className="section-title">
                                <h2>related product</h2>
                            </div>
                            {/* section title end */}
                            {/* Start Slider Navigation */}
                            <div className="ht-slick-nav slick-append">
                                <button className="prev-four"><i className="ion-ios-arrow-left" /></button>
                                <button className="next-four right"><i className="ion-ios-arrow-right" /></button>
                            </div>
                            {/* End Slider Navigation */}
                        </div>
                        {/* categories features start */}
                        <div className="categories-features-wrapper">
                            <div className="ht-slick-slider-wrap">
                                <div className="ht-slick-slider slick-row-15" data-slick="{&quot;slidesToShow&quot;: 4, &quot;slidesToScroll&quot;: 1, &quot;speed&quot;: 1000, &quot;arrows&quot;: true, &quot;prevArrow&quot;: &quot;.prev-four&quot;, &quot;nextArrow&quot;: &quot;.next-four&quot;, &quot;responsive&quot;:[{&quot;breakpoint&quot;:992, &quot;settings&quot;:{&quot;slidesToShow&quot;: 3}}, {&quot;breakpoint&quot;:768, &quot;settings&quot;:{&quot;slidesToShow&quot;: 2}}, {&quot;breakpoint&quot;:480, &quot;settings&quot;:{&quot;slidesToShow&quot;: 1}}]}">
                                    {/* single item start */}
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-5.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                    {/* single item start */}
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-6.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-10%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Organic Mixed Fruit &amp; Vegetable 8kg Box Seeds NON-GMO</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$80.00</del></span>
                                                    <span className="price-regular">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                    {/* single item start */}
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-11.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Organic Mixed Fruit &amp; Vegetable 8kg Box Passionfruit</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$40.00</del></span>
                                                    <span className="price-regular">$30.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                    {/* single item start */}
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-13.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-9%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Kroger Farm-Raised White Shrimp Salmon Fillets Family</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$60.00</del></span>
                                                    <span className="price-regular">$40.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                    {/* single item start */}
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-12.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-6%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$70.00</del></span>
                                                    <span className="price-regular">$90.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                    {/* single item start */}
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-8.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-10%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Fresh While Caught Swordfish Steaks Abound Fresh</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del>$40.00</del></span>
                                                    <span className="price-regular">$30.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </div>
                            </div>
                        </div>
                        {/* categories features end */}
                    </div>
                </div>
            </div>
        </div>


    </main>

    )};
export default ProductDetailPanel