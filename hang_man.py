import random
import re
class Hang_man:

    def __init__(self):
        self.moves_count = 0
        list_of_words = ["happy", "funny", "playful", "loud", "party", "cake", "family", "birthday", "people", "baseball", "python", "javascript", "work", "fruit", "apple", "pear", "summer", "rain", "sunshine", "fishing", "walking"]
        word = random.choice(list_of_words)
        self.guess_word = list(word)
        self.users_choices = []
        self.display_board = []
        
        #print(self.guess_word)

        
    def display_current_board(self):
        print([x for x in self.users_choices])
        print([x for x in self.guess_word if x in self.users_choices])

    
    def match_input(self):
        print("PLAYER 1")
        answer = str(input("Type single char from a-z\n")).lower()
        for char in self.guess_word:
            if char == answer:
                self.users_choices.append(answer)
                self.display_current_board()
                print("That was correct")
                self.match_input()
            self.check_win()
            if char != answer:
                self.users_choices.append(answer)
                self.display_current_board()
                self.moves_count += 1
                print("please try again")
                self.match_input()
            self.check_win()
        

    def check_win(self):
        self.guess_word.sort()
        guess_word_str = ''.join(list(self.guess_word))
        self.users_choices.sort()
        sorted_users_choices = ''.join(list(self.users_choices))
        
        if guess_word_str == sorted_users_choices:
             print("You Win!")
             print(''.join(self.guess_word))
             exit()
        elif self.moves_count == len(self.guess_word):
             print("Game Over")
             print(f"The word was {self.guess_word}! Can you guess what it was?")
             exit()

    
    def play(self):
        while True:
            self.check_win()
            self.match_input()
            

    def run(self):
        self.display_current_board()
        self.play()
       



new_game = Hang_man()
new_game.run()
