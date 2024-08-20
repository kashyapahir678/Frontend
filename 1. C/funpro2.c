#include <stdio.h>

void coin(){
	
	int arr[]={1,2,5,10,20};
	int amount;
	int total1=0, total2=0, total5=0, total10=0, total20=0;
	
	printf("enter the amount \n");
	scanf("%d",&amount);
	
	total1=amount/1;
	total2=amount/2;
	total5=amount/5;
	total10=amount/10;
	total20=amount/20;
	printf("1 = %d \n",total1);
	printf("2 = %d \n",total2);
	printf("5 = %d \n",total5);
	printf("10 = %d \n",total10);
	printf("20 = %d \n",total20);
	
	
}

int main(){
	
	coin();
	return 0;
}