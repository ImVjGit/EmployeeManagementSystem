package com.emp.project;

import java.text.ParseException;
import java.util.Scanner;

public class main {

	public static void main(String[] args) throws ParseException {

		Eprogram[] employee = new Eprogram[10];
		int count = 0;

		Scanner scanner = new Scanner(System.in);
		int op = 0;
		String ans;
		 while(op!=7)
		 {
			System.out.println("****************");
			System.out.println("\n1.Insert");
			System.out.println("2.Display all Employee");
			System.out.println("3.Display Employee of Particular Department");
			System.out.println("4.Sort(As per Salary)");
			System.out.println("5.Update");
			System.out.println("6.Delete");
			System.out.println("7.Exit");
			System.out.println("\n****************");
			System.out.println("Enter your choice: ");

			op = scanner.nextInt();
			switch (op) {
			case 1: {
				System.out.println(" Now Insert Data here...");
				employee[count] = new Eprogram();
				employee[count].Insert();
				count++;

			}
				break;
			case 2: {
				System.out.println(" Display all Employee ");
				for (int i = 0; i < count; i++) {

					System.out.println(employee[i]);

				}
			}
				break;
			case 3: {
				System.out.println(" Display Employee of Particular Department ");
				System.out.println("enter the Department Name : ");
				String d = scanner.next();
				for (int i = 0; i < count; i++) {
					// or 1 optiom
					System.out.println("\n" + d);
					if (employee[i].getDept().equals(d))
						;

					System.out.println(employee[i]);
					break;

					// or 2 option
					// System.out.println(employee[i]);

					// or 3 option 
					/*
					 * System.out.println("Eid : "+employee[i].getEid());
					 * System.out.println("\nName : "+employee[i].getEname());
					 * System.out.println("\nDepartment : "+employee[i].getDept());
					 * System.out.println("\nSalary  : "+employee[i].getSalary());
					 * System.out.println("Date of Join : "+employee[i].getDoj());
					 */
				}
			}
				break;
			case 4:
				System.out.println(" Sort ");
				// bubble sort
				for (int i = 0; i < count - 1; i++) {
					for (int j = i + 1; j < count; j++) {
						if (employee[i].getSalary() > employee[j].getSalary()) {
							Eprogram temp = employee[j];
							employee[j] = employee[i];
							employee[i] = temp;
						}
					}
				}

//		   //display all after sort 
				for (int i = 0; i < count; i++) {
					System.out.println(employee[i]);
				}

				break;
			case 5: {
				System.out.println(" Update ");
				System.out.println("Enter employee eid : ");
				int id = scanner.nextInt();
				for (int i = 0; i < count; i++) {
					if (employee[i].getEid() == id) {
						employee[i].Update();

					} else {
						System.out.println("Not FOund !!!!");
					}

				}

			}
				break;
			case 6:
				System.out.println(" Delete ");
				System.out.println("Enter employee eid : ");
				int id = scanner.nextInt();
				for (int i = 0; i < count; i++) {
					if (employee[i].getEid() == id) {

						employee[i] = null;
						break;
					} else {
						System.out.println("Not FOund !!!!");
					}

				}

				break;
			case 7: {
				System.out.println(" Exit ");
			}
				break;

			default: {
				System.out.println(" Invalid ...!!!");
			}
				break;

			}

			
		} 

	}

}
