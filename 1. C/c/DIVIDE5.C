 #include <stdio.h>
#include <conio.h>

void main() {

    int val;
    clrscr();

    printf("enter the value");
    scanf("%d",&val);

    if(val%5==0){
     printf("divisible 5");
    }else{
     printf("not divisible by 5");
    }
}