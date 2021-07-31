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
    private Float rating;
    private Float sweet;
    private Float acidic;
    private Float floral;
    private Float spicy;
    private Float salty;
    private Float berryfriut;
    private Float citrusfruit;
    private Float stonefruit;
    private Float chocolate;
    private Float caramel;
    private Float smoky;
    private Float bitter;
    private Float savory;
    private Float body;
    private Float clean;
    private Float linger;

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

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public Float getSweet() {
        return sweet;
    }

    public void setSweet(Float sweet) {
        this.sweet = sweet;
    }

    public Float getAcidic() {
        return acidic;
    }

    public void setAcidic(Float acidic) {
        this.acidic = acidic;
    }

    public Float getFloral() {
        return floral;
    }

    public void setFloral(Float floral) {
        this.floral = floral;
    }

    public Float getSpicy() {
        return spicy;
    }

    public void setSpicy(Float spicy) {
        this.spicy = spicy;
    }

    public Float getSalty() {
        return salty;
    }

    public void setSalty(Float salty) {
        this.salty = salty;
    }

    public Float getBerryfriut() {
        return berryfriut;
    }

    public void setBerryfriut(Float berryfriut) {
        this.berryfriut = berryfriut;
    }

    public Float getCitrusfruit() {
        return citrusfruit;
    }

    public void setCitrusfruit(Float citrusfruit) {
        this.citrusfruit = citrusfruit;
    }

    public Float getStonefruit() {
        return stonefruit;
    }

    public void setStonefruit(Float stonefruit) {
        this.stonefruit = stonefruit;
    }

    public Float getChocolate() {
        return chocolate;
    }

    public void setChocolate(Float chocolate) {
        this.chocolate = chocolate;
    }

    public Float getCaramel() {
        return caramel;
    }

    public void setCaramel(Float caramel) {
        this.caramel = caramel;
    }

    public Float getSmoky() {
        return smoky;
    }

    public void setSmoky(Float smoky) {
        this.smoky = smoky;
    }

    public Float getBitter() {
        return bitter;
    }

    public void setBitter(Float bitter) {
        this.bitter = bitter;
    }

    public Float getSavory() {
        return savory;
    }

    public void setSavory(Float savory) {
        this.savory = savory;
    }

    public Float getBody() {
        return body;
    }

    public void setBody(Float body) {
        this.body = body;
    }

    public Float getClean() {
        return clean;
    }

    public void setClean(Float clean) {
        this.clean = clean;
    }

    public Float getLinger() {
        return linger;
    }

    public void setLinger(Float linger) {
        this.linger = linger;
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
                ", sweet=" + sweet +
                ", acidic=" + acidic +
                ", floral=" + floral +
                ", spicy=" + spicy +
                ", salty=" + salty +
                ", berryfriut=" + berryfriut +
                ", citrusfruit=" + citrusfruit +
                ", stonefruit=" + stonefruit +
                ", chocolate=" + chocolate +
                ", caramel=" + caramel +
                ", smoky=" + smoky +
                ", bitter=" + bitter +
                ", savory=" + savory +
                ", body=" + body +
                ", clear=" + clean +
                ", linger=" + linger +
                '}';
    }
}