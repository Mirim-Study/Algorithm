#include <string>
using namespace std;

string solution(int a, int b) {
    string answer = "";
    int month[]={1,2,3,4,5,6,7,8,9,10,11,12};
    int last_day[]={31,29,31,30,31,30,31,31,30,31,30,31};
    
    for(int i=0; i<12; i++){
        if(a==month[i])
        {
            for(int j=0; j<i; j++)
            {
                b+=last_day[j];
            }
        }
    }
    switch(b%7){
        case 0: answer = "THU"; break;
        case 1: answer = "FRI"; break;
        case 2: answer = "SAT"; break;
        case 3: answer = "SUN"; break;
        case 4: answer = "MON"; break;
        case 5: answer = "TUE"; break;
        case 6: answer = "WED"; break;
    }
    return answer;
}
