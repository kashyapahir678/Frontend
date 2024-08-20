#include <stdio.h>

int main() {
	
	int arr[3][3];
	int total=0;
	
	for(int i=0; i<3; i++){
		for(int j=0; j<3; j++){
			printf("enter the row %d and coloum %d \n",i,j);
			scanf("%d",&arr[i][j]);
		}
	}
	
	for(int i=0; i<3; i++){
		for(int j=0; j<3; j++){
			total+=arr[i][j];
			printf("%d \t",arr[i][j]);
		}
		printf("\n");
	}
	printf("total %d",total);
	return 0;
}