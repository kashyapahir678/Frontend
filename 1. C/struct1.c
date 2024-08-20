#include <stdio.h>

struct Student{
	
	int id;
	char name[50];
	int mark;
	int total;
	int per;
};

int main(){
	
	struct Student student[4],marks[3];

    for(int i=0; i<=1; i++){
		int total=0;
		int per=0;
		printf("enter the detail %d \n",i+1);
		scanf("%d",&student[i].id);
		scanf("%s",&student[i].name);
		for(int j=1; j<=3; j++){
			scanf("%d",&marks[j].mark);
			total+=marks[j].mark;
			per=total*100/300;
		}
		printf("student %d total is : %d \n",i+1,total);
		printf("student %d percentage is : %d \n",i+1,per);
	}	
	
	
    

   return 0;
}