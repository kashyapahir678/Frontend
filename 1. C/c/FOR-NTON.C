#include <stdio.h>
#include <conio.h>

void main(){

   int n;
   int i;

   clrscr();

   printf("value \t");
   scanf("%d",&n);

   for(i=-n;i<=n;i++){
    printf("%d",i);
   }
}