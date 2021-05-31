package org.steinko.helloworld;

import java.io.File;
import java.util.Scanner;
import java.io.FileNotFoundException;


public class  IpAdressFile {
	
	static public String getIpAdress() {
		
		 String ipAdresse ="";
         File file = new File("externalIpAdress.txt");
		 try {
		        Scanner reader = new Scanner(file);
		        ipAdresse = reader.nextLine();
		        reader.close();
		     }  catch (FileNotFoundException e) {
		            System.out.println("An error occurred.");
		            e.printStackTrace();
		     }
		     return ipAdresse;
	 }
}