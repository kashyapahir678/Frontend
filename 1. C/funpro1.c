#include <stdio.h>

void reverse(){
	
	int arr[50];
	int n;
	
	printf("enter the size of array");
	scanf("%d",&n);
	
	for(int i=0; i<n; i++){
		scanf("%d",&arr[i]);
	}
	
	printf("reverse size print :\n");
	for(int i=n-1; i>=0; i--){
		printf("%d \n",arr[i]);
	}
}

int main(){
	
	reverse();

   return 0;
}