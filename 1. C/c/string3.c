#include <stdio.h>
#include <string.h>

int main(){
	
	char arr[50];
	int i;
	
	gets(arr);
	
	for(i=0; arr[i]!='\0'; i++){
		printf("%c",arr[i]);
	}
	
	for(int j=i; j>=0; j--){
		printf("%c",arr[j]);
	}

   return 0;
}