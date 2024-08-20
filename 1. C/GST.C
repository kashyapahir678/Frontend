
#include <stdio.h>
#include <conio.h>

void main() {

   int rate,qty;

   int total;
   float dis;

   clrscr();
   printf("enter the rate:");
	  scanf("%d", &rate);

   printf("enter the qty:");
   scanf("%d", &qty);

  total=rate*qty;

  dis=(total*5)/100.0;

  printf("rate \t qty \t amt \t dis5% \n");
  printf("%d \t %d \t %d \t %f", rate,qty,total,dis);

}