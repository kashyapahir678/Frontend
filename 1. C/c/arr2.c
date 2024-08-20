#include <stdio.h>


int main(){
	
	int marks[3];
	int total,per;
	
	for(int i=0; i<5; i++){
		
		printf("enter the student %d Detail \n",i+1);
		total=0;
		per=0;
		for(int j=0; j<3; j++){
			printf("%d subject marks ",i+1);
		    scanf("%d",&marks[j]);
			total+=marks[j];
			per=total*100/300;
		}
        printf("%d student Total Marks %d \n",i+1,total);
		printf("%d student Percentage %d \n", i+1,per);
		if(per>80){
			printf("student %d get A grade \n",i+1);
		}
		else if(per>70){
			printf("student %d get B grade \n",i+1);
		}
		else if(per>60){
			printf("student %d get C grade \n",i+1);
		}
		else if(per>50){
			printf("student %d get D grade \n",i+1);
		}
		else if(per>40){
			printf("student %d get E grade \n",i+1);
		}
		else{
			printf("student %d Fail \n",i+1);
		}
	}
	
	return 0;
}

