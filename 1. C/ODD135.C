#include <stdio.h>
#include <conio.h>

void main() {

     int i;
     int total=0;

     clrscr();

     for(i=1;i<=10;i++){
       if(i%2==1){
	 total+=i;
	 }
     }
     printf("%d",total);
}