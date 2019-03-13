package com.gxhy.base.model;

public class Audience {
	public void takeSeats(){
        System.out.println("后置通知1");
    }
    public void turnOffCellPhones(){
        System.out.println("后置通知2");
    }
    public void applaud(){
        System.out.println("CLAP CLAP CLAP");
    }
    public void demandRefund(){
        System.out.println("Boo! We want money back");
    }
}
