package com.miyazakimaiko.coffeetastingjournal.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

// Memo: Serializable helps to transform the class to
// different types of stream (useful if you are storing it
// to the database and use on the frontend as json etc).

@Entity
public class Coffee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String roaster;
    private LocalDate roastDate;
    private String variety;
    private String process;
    private String brewMethod;
    private String notes;
    private int rating;
    private String imageUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRoaster() {
        return roaster;
    }

    public void setRoaster(String roaster) {
        this.roaster = roaster;
    }

    public LocalDate getRoastDate() {
        return roastDate;
    }

    public void setRoastDate(LocalDate roastDate) {
        this.roastDate = roastDate;
    }

    public String getVariety() {
        return variety;
    }

    public void setVariety(String variety) {
        this.variety = variety;
    }

    public String getProcess() {
        return process;
    }

    public void setProcess(String process) {
        this.process = process;
    }

    public String getBrewMethod() {
        return brewMethod;
    }

    public void setBrewMethod(String brewMethod) {
        this.brewMethod = brewMethod;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Coffee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", roaster='" + roaster + '\'' +
                ", roastDate=" + roastDate +
                ", variety='" + variety + '\'' +
                ", process='" + process + '\'' +
                ", brewMethod='" + brewMethod + '\'' +
                ", notes='" + notes + '\'' +
                ", rating=" + rating +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
