#include <stdio.h>
#include <conio.h>

  void main() {

       int r;
       float pi =3.14;
       float total = 0;

       clrscr();

       printf("enter the value \t");
       scanf("%d",&r);

       total=pi*r*r;

       printf("pi value of %.2f",total);
}