### It is a web page that shows details of all the members, owners and contributors 
### [Techistan Contibutors]('www.xzy.com')

# First Contribution
- Are you new to open source project?
- Do you want to make open source contribution?
- Can't find a beginner's project to contribute

Don't worry you are at perfect place. This is simple project you just have to add yourself as contributor by adding your name members.json file. Still can't get it don't worry below is step by step giude to help you make your first contribution.

## How to contribute
Here you will learn how you can contribute to this project and can make your first contribution

## 1. Fork this repository

You can fork this repository by clicking on fork button on top right corner. Once you fork this will create a copy of repo on your account 

## 2. Clone the repository

To clone the repository go to your account open this repo and either click on clone button or run the command below to get this repository on your local machine


```
git clone "URL you just copied"
```

Like this 
```
git clone https://github.com/yourgithubusername/first_contribution.git
```

## 3. Create a branch

In your local machine go the folder that you cloned and use following git command inside that folder

create a new branch using below command

```
git checkout -b <add-your-github-username>
```

like

```
git checkout -b add-owais431
```

## 4. Lets make some contributions

On your local machine open `Data` folder in repository and change `member.json` file and add your details in contributors array 
## 5. Add Changes and Commit Changes

Now we have to add changes that we made to the branch so for that we will run following command

```
git Data/member.json
```

Now we have to commit changes, commit message should always be clear, to commit use command below

```
git commit -m "Add my-name to the list of contributors"
```


## 6. Push changes to GitHub

Now have to push the changes we made to remote repository on specified branch to do so use command below
```
git push origin name-of-your-branch
```
name of branch is same as you created in step 3

## Submit your changes for review
Once you have pushed your code to github now the its time to create pull create, you will go to the repository click on `campare and pull request` and submit the pull request.

Soon, we will be merging all your pull requests to the main branch of project and you will also get notification once your pull request is merged with existing code base you will be able to your details in contributor section in page below


