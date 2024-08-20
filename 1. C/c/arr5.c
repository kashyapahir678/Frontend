#include <stdio.h>

int main() {
	
	
	int arr[5];
	int total=0;
	
	for(int i=0; i<5; i++){
		printf("value %d ",i);
        scanf("%d",&arr[i]);
	}
	
	for(int i=0; i<5; i++){
		total+=arr[i];
	}
	printf("total is %d",total);
	
	return 0;
}