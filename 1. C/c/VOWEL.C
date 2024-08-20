#include <stdio.h>
#include <conio.h>

void main() {

     char name;


     printf("enter the character");
     scanf("%c",&name);

     if(name=='a' || name =='e'||name=='i'||name=='o'||name=='u'){
         printf("charcter is vowel");
     }
     else{
         printf("consonant");
     }

}