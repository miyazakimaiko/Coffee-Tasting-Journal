package com.miyazakimaiko.coffeetastingjournal.model;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class Taste implements Serializable {
    private Float acidic;
    private Float floral;
    private Float berryfriut;
    private Float citrusfruit;
    private Float stonefruit;
    private Float chocolate;
    private Float caramel;
    private Float bitter;
    private Float smoky;
    private Float savory;
    private Float spicy;
    private Float body;
    private Float linger;
    private Float clean;

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
}