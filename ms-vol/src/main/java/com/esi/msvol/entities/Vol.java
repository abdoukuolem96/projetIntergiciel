package com.esi.msvol.entities;

import com.esi.msvol.model.Pellerin;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "Vol")
public class Vol {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name="datedepart")
	private Date datedepart;

    @Column(name="datedarrive")
	private Date datedarrive;

	@Column(name="lieudepart")
	private String lieudepart;

	@Column(name = "agance")
	private String agance;


    @Column(name="Avion")
	private String avion;

    @Column(name="lieudarrive")
	private String lieudarrive;

	@Column(name = "age")
	private int age;


	@Column(name = "active")
	private boolean active;

	@Transient
	private Collection<Pellerin> pellerins;

	public Vol() {
	}

	public Vol(Date datedepart, Date datedarrive, String lieudepart, String agance, String avion, String lieudarrive, int age) {
		this.agance = agance;
		this.datedepart=datedepart;
		this.avion=avion;
		this.datedarrive = datedarrive;
		this.lieudarrive = lieudarrive;
		this.lieudepart = lieudepart;
		this.age = age;
	}

	public Collection<Pellerin> getPellerins() {
		return pellerins;
	}

	public void setPellerins(Collection<Pellerin> pellerins) {
		this.pellerins = pellerins;
	}

	public Date getDatedepart() {
		return datedepart;
	}

	public void setDatedepart(Date datedepart) {
		this.datedepart = datedepart;
	}

	public void setDatedarrive(Date datedarrive) {
		this.datedarrive = datedarrive;
	}

	public void setLieudepart(String lieudepart) {
		this.lieudepart = lieudepart;
	}

	public void setAvion(String avion) {
		this.avion = avion;
	}

	public void setLieudarrive(String lieudarrive) {
		this.lieudarrive = lieudarrive;
	}

	@Override
	public String toString() {
		return "Vol{" +
				"id=" + id +
				", datedepart=" + datedepart +
				", datedarrive=" + datedarrive +
				", lieudepart='" + lieudepart + '\'' +
				", agance='" + agance + '\'' +
				", avion='" + avion + '\'' +
				", lieudarrive='" + lieudarrive + '\'' +
				", age=" + age +
				", active=" + active +
				", pellerins=" + pellerins +
				'}';
	}

	public Vol(long id, Date datedepart, Date datedarrive, String lieudepart, String agance, String avion, String lieudarrive, int age, boolean active, Collection<Pellerin> pellerins) {
		this.id = id;
		this.datedepart = datedepart;
		this.datedarrive = datedarrive;
		this.lieudepart = lieudepart;
		this.agance = agance;
		this.avion = avion;
		this.lieudarrive = lieudarrive;
		this.age = age;
		this.active = active;
		this.pellerins = pellerins;
	}

	public Date getDatedarrive() {
		return datedarrive;
	}

	public String getLieudepart() {
		return lieudepart;
	}

	public String getAvion() {
		return avion;
	}

	public String getLieudarrive() {
		return lieudarrive;
	}

	public void setAgance(String name) {
		this.agance = name;
	}

	public String getAgance() {
		return this.agance;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getAge() {
		return this.age;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
