#include <stdio.h>

int main() {

   int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};
   int lower=0;
   int upper=0;
   int diagonal=0;
   
   
   for(int i=0; i<3; i++){
	   for(int j=0; j<3; j++){
		   printf("%d",arr[i][j]);   
	   }
	   printf("\n");
   }
   printf("\n");

   for(int i=0; i<3; i++){
	   for(int j=0; j<3; j++){
		   if(i<j){   
			   upper+=arr[i][j];
		   }
		   else if(i>j){
			   lower+=arr[i][j];
		   }
		   else if(i==j){
			   diagonal+=arr[i][j];
		   }
	   }
	   
   }
      printf("lower triangle sum is %d \n",lower);
      printf("upper triangle sum is %d \n",upper);
      printf("diagonal triangle sum is %d \n",diagonal);
	  
	  return 0;
	  
}
   

