#include <stdio.h>
#include <string.h>

int main() {

   char arr1[50];
   char arr2[50];
   
   
   gets(arr1);
   gets(arr2);
   
   for(int i=0; arr1[i]!='\0'; i++){
	   printf("%c",arr1[i]);
	   
   }
   
   for(int j=0; arr2[j]!='\0'; j++){
	   printf("%c",arr2[j]);
   }
   
   
   

   return 0;
}