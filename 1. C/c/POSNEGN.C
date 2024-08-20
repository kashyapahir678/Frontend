
#include <stdio.h>
#include <conio.h>

void main() {

   int a=100;
   int b=20;
   int c=30;

   clrscr();

   if(a>b && a>c){
     printf("a is largest");
   }
   if(b>a && b>c){
     printf("b is largest");
   }
   if(c>a && c>b){
     printf("c is largest");
   }
}