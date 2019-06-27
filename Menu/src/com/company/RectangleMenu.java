package com.company;
import java.util.Scanner;

public class RectangleMenu
{
    public static void main(String[] args)
    {
        Rectangle Rect = new Rectangle(5, 4);


    int selection;

        do{
            menuPrompt();

            Scanner input = new Scanner(System.in);
            System.out.print("choose a number: ");
            selection = input.nextInt();


            switch (selection)
            {
                case 0:
                    System.out.print("Good bye\n");
                    break;
                case 1:
                    System.out.printf(" Area is: %d\n\n",Rect.area());
                    break;
                case 2:
                    System.out.printf("Perimeter is: %d\n\n", Rect.perimeter());
                    break;
                case 3:
                    System.out.printf("length is: %d, width is: %d\n\n", Rect.getLength(), Rect.getWidth());
                    break;

                default:
                    System.out.println("invalid input\n\n");
                    break;
            }
        } while(selection !=0);

    }

    private static void menuPrompt()
    {
        System.out.println("1 .. area");
        System.out.println("2 .. perimeter");
        System.out.println("3 .. length and width");
        System.out.println("0 .. exit");
        System.out.print("Your choice: ");
    }
}