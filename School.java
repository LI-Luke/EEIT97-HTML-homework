package tw.luke.myproject.review;


import java.util.Scanner;

public class School {
	private Scanner scn;
	private String teacherName = "Tom";
	private int age = 25;
	
	

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setTeacherData(School s) {
		scn = new Scanner(System.in);
		System.out.print("請輸入老師的名字：");
		String teacherName = scn.nextLine();
		s.setTeacherName(teacherName);
		System.out.print("請輸入老師年齡：");
		int age = scn.nextInt();
		s.setAge(age);
		System.out.println("TeacherName:" + s.getTeacherName() + "    age:" + s.getAge());
		
	}

	public boolean confirm() {
//		System.out.println("請確認上述資料是否正確(Y/N)");
		boolean b=true;
		int count=-1;
		while (true) {
			
			String c = scn.nextLine();
			if (c.equalsIgnoreCase("y"))
			{
				b=true;
				break;
				
			}
			 else if (c.equalsIgnoreCase("n")) {
				System.out.println("請重新輸入資料");
				setTeacherData(new Teacher());
				continue;
			}
			System.out.print("請確認上述資料是否正確(Y/N)");
			count++;
			if(count==5)
			{
				System.out.println("\n重複輸入多次 系統自動登出!!!");
				b=false;
				break;
			}
		}
			return b;
	}
	
}
