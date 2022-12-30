package aurora.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="product_to_product_category_key")
@Data
public class ProductToProductCategoryKey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "product_id")
    private String productId;

    @Column(name = "product_category_id")
    private  String productCategoryId;
}
