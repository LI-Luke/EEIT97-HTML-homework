package tw.luke.myproject.review;



public class SchoolSystem {

	public static void main(String[] args) {
	 School t1 =new School();
	 t1.setTeacherData(new Teacher());
		boolean confirm=t1.confirm();
		if(confirm){
		t1= new Teacher();
			 if(t1 instanceof Teacher)
			 {
				 Teacher t=(Teacher)t1;
				 t.setTeach();
				 t.subject();
			 }
		}
	}
	

}

