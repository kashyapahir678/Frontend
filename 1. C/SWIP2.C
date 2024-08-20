#include <stdio.h>
#include <conio.h>

 void main() {

     int a,b;

     clrscr();
     printf("enter the value of a");
     scanf("%d",&a);

     printf("enter the value of b");
     scanf("%d",&b);

     b=b+a;
     a=b-a;
     b=b-a;

     printf("%d \n",a);
     printf("%d",b);
 }