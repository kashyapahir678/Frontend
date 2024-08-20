#include <stdio.h>

int main() {
  
   int arr[5];
   int odd=0;
   int even=0;
   
   for(int i=0; i<5; i++){
	   printf("enter the value");
	   scanf("%d",&arr[i]);
   }
   
   for(int i=0; i<5; i++){

	   if(i%2==0){
		   even=even+arr[i];
	   }
	   else{
		   odd=odd+arr[i];
	   }
   }
   printf("odd sum is %d \n",odd);
   printf("even sum is %d",even);
  
   return 0;
}