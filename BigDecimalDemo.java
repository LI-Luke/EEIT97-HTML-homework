package ch03;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class BigDecimalDemo {
	public static void main(String[] args) {
		//BigDecimal bd0 = new BigDecimal("0.1");
		BigDecimal bd1 = BigDecimal.valueOf(258.2563);
		BigDecimal bd2 = BigDecimal.valueOf(2530.79);
		BigDecimal bd3 = bd1.add(bd2);
		BigDecimal bd4 = bd1.divide(bd2, 5, RoundingMode.HALF_UP);
		System.out.println(bd3);
		System.out.println(bd4);
	}
}
