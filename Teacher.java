package tw.luke.myproject.review;

import java.util.Scanner;

public class Teacher extends School {

	private String teach;
	private Scanner scn;

	public String setTeach() {
		scn = new Scanner(System.in);
		System.out.print("教的科目:");
		teach = scn.nextLine();
		return teach;
	}

	public void subject() 
	{
		int count = 1;
		while (true) 
		{

			if (teach.equalsIgnoreCase("English")) 
			{
				System.out.println("welcome English World");
				break;
			} else if (teach.equalsIgnoreCase("Math")) 
			{
				System.out.println("welcome math World");
				break;
			} else if (teach.equalsIgnoreCase("Chinese"))
			{
				System.out.println("welcome Chinese World");
				break;
			} else 
			{
				count++;
				System.out.println("Error subject ");
				System.out.print("教的科目:");
				teach = scn.nextLine();
				if(count==5)
				{
					System.out.println("重複輸入多次 系統自動登出!!!");
					break;
				}

			}

		}
	}
}
