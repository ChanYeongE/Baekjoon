#include <iostream>
#include <cstdio>
#include <vector>
using namespace std;

int main(){
    vector<int> v1 = {1, 2, 3};
    vector<pair<int, char>> v2;
    int a, b;
    char c, d;

    v1.push_back(5); //마지막에 데이터 추가
    v1.push_back(6); //마지막에 데이터 추가2
    for(int i=0; i<v1.size(); i++){
        printf("%d ", v1[i]);
    }

    printf("\n");

    a = v1.front(); // 첫 번째 원소
    b = v1.back(); // 마지막 원소
    printf("first : %d, last : %d\n", a, b);
    v1.pop_back(); // 마지막에서 데이터 뽑기
    for(int i =0; i<v1.size(); i++){
        printf("%d ", v1[i]);
    }
    printf("\n");

    // vector에 pair도 적용가능
    v2.push_back(make_pair(1, 'a'));
    v2.push_back(make_pair(2, 'b'));
    v2.push_back(make_pair(3, 'c'));
    for(int i=0; i<v2.size(); i++){
        printf("<%d %c> ", v2[i], v2[i].second);
    }
    printf("\n");

    a = v2.front().first; //변수 a에 v2벡터 첫 번째 원소중에 첫 번째 값을 넣음
    c = v2.front().second; //변수 c에 v2벡터 첫 번째 원소중에 두 번째 값을 넣음
    b = v2.back().first; //변수 b에 v2벡터 마지막 원소중에 첫 번째 값을 넣음
    d = v2.back().second; //변수 b에 v2벡터 마지막 원소중에 두 번째 값을 넣음
    printf("front : <%d %c>\n", a, c);
    printf("back : <%d %c>\n", b, d);
}