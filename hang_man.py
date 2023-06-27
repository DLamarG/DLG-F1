import random
class Hang_man:

    def __init__(self):
        self.moves_count = 0
        list_of_words = ["happy", "funny", "playful", "loud", "party", "cake", "family", "birthday", "people", "baseball", "python", "javascript", "work", "fruit", "apple", "pear", "summer", "rain", "sunshine", "fishing", "walking"]
        word = random.choice(list_of_words)
        self.guess_word = list(word)
        self.display_word = word
        self.users_choices_correct = []
        self.users_choices_wrong = []
        self.display_board = []
        

    def display_current_board(self):
        print(f"{len(self.display_word)*'__  '}")
        print([x for x in self.users_choices_wrong])
        print(self.users_choices_correct)
        

    
    def match_input(self):
        print("PLAYER 1")
        answer = str(input("Type single char from a-z\n"))
        
        if answer in self.guess_word and answer not in self.users_choices_correct:
            self.users_choices_correct.append(len([x for x in self.guess_word if x == answer])* answer)
            self.display_current_board()
            print("That was correct")
            self.check_win()
            self.match_input()
            
        else:
            self.users_choices_wrong.append(answer)
            self.display_current_board()
            self.moves_count += 1
            print("please try again")
        self.check_win()
        self.match_input()
                
        

    def check_win(self):
        (self.guess_word).sort()
        newg = list(''.join(self.users_choices_correct))
        newg.sort()
        #sorted_users_choices = ''.join(list(self.users_choices_correct))
        
        if self.guess_word == newg:
             print(f"Your word was {self.display_word.title()}!")
             print("You Win!")
             exit()
        elif self.moves_count == len(self.guess_word):
             print("Game Over")
             print(f"The word was {self.guess_word}! Can you guess what it was?")
             exit()

    
    def play(self):
        while True:
            #self.check_win()
            self.match_input()
            

    def run(self):
        self.display_current_board()
        self.play()
       

new_game = Hang_man()
new_game.run()
