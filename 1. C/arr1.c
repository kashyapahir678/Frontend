#include <stdio.h>

int main() {
	
	int arr_one[5];
	int arr_two[3];
	
	for(int i=0; i<4; i++){
		printf("enter the element %d :",i);
		scanf("%d ",&arr_one[i]);
	}
	
	for(int i=0; i<4; i++){
		printf("value is %d \n",arr_one[i]);
	}
	
	for(int j=0; j<2; j++){
		printf("enter the element %d :",j);
		scanf("%d ",&arr_one[i]);
	}
	
	for(int j=0; j<2; j++){
		printf("value is %d \n",arr_one[j]);
	}
	
	return 0;
}