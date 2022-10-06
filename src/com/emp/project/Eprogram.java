package com.emp.project;

import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Eprogram {

	private int eid;
	private String ename;
	private String dept;
	private double salary;
	private Date doj;
	
	
	public Eprogram() {
	
		this.eid=0;
		this.ename="";
		this.dept="";
		this.salary=0.0;
		this.doj = new Date();
	}
	
	public Eprogram(int id,String nm,String dept,double sal,Date doj)
	{		
		this.eid = id;
		this.ename =nm;
		this.dept = dept;
		this.salary=sal;
		this.doj = doj;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public Date getDoj() {
		return doj;
	}

	public void setDoj(Date doj) {
		this.doj = doj;
	}

	
	public void Insert() throws ParseException
	{
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter Id : ");
		eid = scanner.nextInt();
		System.out.println("Enter Name : ");
		ename= scanner.next();
		System.out.println("Enter Department : ");
		dept= scanner.next();
		System.out.println("Enter Salary : ");
		salary= scanner.nextInt();
		System.out.println("Enter Date of Joim(dd-mm-yyyy) : ");
		String da =scanner.next();
		SimpleDateFormat format= new SimpleDateFormat("dd-mm-yyyy");
		doj = format.parse(da);
		
	}
		
	@Override
	public String toString() {
		
		return "\nEmployee ID :  "+this.eid
				+"\nName : "+this.ename
				+"\nDepartment : "+this.dept
				+"\nSalary : "+this.salary
				+"\nDate of Join: "+this.doj
				+"\n ";
	}
	
	
	public void Update() throws ParseException 
	{
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the name : ");
		String name = scanner.next();		
		setEname(name);
		System.out.println("Enter the Department Name : ");
		String dname = scanner.next();		
		setDept(dname);
		System.out.println("Enter the Salary : ");
		double sal = scanner.nextDouble();		
		setSalary(sal);
		System.out.println("Enter the data (dd-mm-yyyy) : ");
		String dod = scanner.next();
		SimpleDateFormat fd =new SimpleDateFormat("dd-mm-yyyy");
		doj = fd.parse(dod);
		setDoj(doj);
		System.out.println("successfully Update ");
		
	}
	
	public void search(String v )
	{
		if(dept.equals(v))
		{
			
		}else {
			System.out.println("Not Found !!!!");
		}
	
	}
	
	
	public void Delete() 
	{
		Scanner scanner = new Scanner(System.in);
		System.out.println("\n Enter the emplyee Id : ");
		int seid= scanner.nextInt();
		if(seid == eid)
		{
			System.out.println(eid +" is Deleted...");
		}
		else {
			System.out.println(" Not Found !!!");}
		}
	
	
	
}
