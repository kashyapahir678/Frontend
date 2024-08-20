#include <stdio.h>

int main() {
    // Write C code here
   char arr1[50];
   char arr2[50];
   char i,j;
   
   printf("enter the first string \n");
   scanf("%s",arr1);
   
   printf("enter the first string \n");
   scanf("%s",arr2);
   
   for(i=0, arr1[i]!='\0', i++);
   for(j=0, arr2[j]!='\0', j++, i++){
       arr1[i]=arr2[j];
   }
   arr1[i]!='\0';
   printf("output is : %s",arr1);
   
    return 0;
}








