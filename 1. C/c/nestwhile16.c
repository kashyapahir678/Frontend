#include <stdio.h>

int main(){
	
	int i=1;
	int k=65;
	while(i<=5){
		int j=1;
		while(j<=i){
			
			
			if(i%2==0){
				
				printf("%c",k);  
				k++;
			}
			else{
				printf("%c",k+32);
			}
			j++;
		}
		printf("\n");
		i++;
	}

  return 0;
}