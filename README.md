
## REPO PURPOSE

This is a way to keep track of practice problems I do in Javascript, as well as any comments or learnings related to them.


## LATEST REVIEW GOALS:


-priorities are 
    -solving problems, programming logic stuff
    -finishing codeacademy 
    -blockchain readme 


12/22
-check out clean code (book)

12/20
-solve sumAndExcludePrimes in array problems section
-work on codeacademy 
-git commit 

12/8
*i should try doing lots of small variations on the same problem. Like when I get a practice problem, ask for 5-10 different versions of the same concept for homework, like 5 nested loop problems. like this one-
https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/

-pick 4 days to do about 10% per day of codeacademy (from 58% currently), to be on track to finish the basic level by next Wednesday the 15th. 
    -can add a few minutes of "housekeeping" cleaning up/organizing the files 
    -just focus on knocking out the CA course
    -times in phone alarms



tips:
-find a homey environment to work in 

11/24

-do integerAndRange- done
-aim for 75% CA completion by monday
-keep working on blockchain, savjee sec1 and 2 by Monday 

also done- edabit 75 exp, one tough problem 

11/22
-go though and clean up the file tree, make it more presentable and organized

-there should just be one place for any comments and thoughts, which is the readme

-continue those problems on wednesday



## USING GIT 

The three parts of your local repo are: local storage, staging area, commit history.
local storage -> staging area -> commit history ----->>>> remote repo

1. local storage -> staging area
```git add . # adds files to your staging area```

2. staging area -> commit history
```git commit -m # creating a commit```

TIP: use ```git commit -am``` to combine adding and committing in one simple command. But unlike using ".add" and then "commit -m",  this will only add modified files, not new files. 

3. commit history local -> remote repo
git push // this pushes to the remote repo






## SELF-QUIZ QUESTIONS

1. What's one way to delete an element from an array?

2. How can you make a code snippet in markdown?

3. the important part is practice and breaking down the problem 


## PROBLEMS LOG 
# a list of the problems I do, with a summary of their purpose and an explanation/walkthrough of how they work. 

# Age To Days 
This one accepts an integer, which represents a person's age in years, and returns the number of days that adds up to. 

Since there are 365 days in a year, it multiplies that number by the number given as an argument. I interpolate that expression within a string that says 'I'm (however many) days old!'

# Anagram Or Not 
This function takes two strings, and decides if one is a permutation of the other. Like 'cat' and 'act'. 

It uses a dictionary



## PROBLEM NOTES AND REFLECTIONS 

12/27
-isEveryCharacterUnique
-refreshed on dictionaries/hash tables 
-double for loop to check for uniqueness 
-troubleshooting- broke on the second loop (a false positive )
-(time complexity, space complexity, and Big O) the two functions differ by the type of complexity they optimize for. The solution with the two for loops doesn't use memory, but is very expensive in terms of time; it is high in time complexity. The first solution, with the dictionary, is much more efficient in terms of time because it doesn't have to iterate over every character by the total numbers of characters like in the for loops solution. 