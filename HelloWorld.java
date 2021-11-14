

public class HelloWorld{

    public static void main(String[] args) {
        System.out.println("Hello World!!!");
        System.out.println("string cancat" + " -> Hello World !");
        System.out.println("numeric cancat" + " -> " + 999);

        String strTmp = "0123456789";
        System.out.println("substring 2-5 (" + strTmp.substring(2,5)+")");

        System.out.println("-------------------");

        sub1 Osub1 = new sub1();
        Osub1.pr_test(3);
    }
}

class sub1 {
    public void pr_test(int nCnt){
        for(int i = 0; i < nCnt; i++){
            String strTmp = String.format(", next '%d' time", i+10);
            System.out.printf("test '%d' time", i+1);
            System.out.println(strTmp);
        }
    }
}