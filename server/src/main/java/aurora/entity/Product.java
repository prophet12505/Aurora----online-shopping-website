package aurora.entity;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="product")
@Data
public class Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;



    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private  String description;

    @Column(name = "image")
    private String image;

    @Column(name = "active")
    private boolean active;

    @Column(name = "units-inStock")
    private int unitsInStock;

    @Column(name = "date-created")
    private Date dateCreated;

    @Column(name = "date-modified")
    private Date dateModified;


}