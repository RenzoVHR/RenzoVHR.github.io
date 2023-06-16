from settings import Settings
from os import system
import json
from user import User
from getpass import getpass
from pokemon import Pokemon
import time
class Pokedex:
	def __init__(self):
		self.settings = Settings()

	def data(self):
		try:
			with open(self.settings.pokemon_location, 'r') as file:
				self.settings.pokemon = json.load(file)
		except:
			self.settings.pokemon = {}
		try:
			with open(self.settings.user_location, 'r') as file:
				self.settings.users = json.load(file)
		except:
			self.settings.users = {}
	def login(self):
		attempt = 0
		while attempt < 3:
			b = input("Name : ").title()
			c = getpass("Password : ").title()
			if b in self.settings.users:
				if c == self.settings.users[b]["password"]:
					self.user = User(b,
						first = self.settings.users[b]['name'],
						last = self.settings.users[b]['last'],
						password = "")
					self.settings.active = True
					self.name = b
					return True
			else:
				print("Your Name or Password is Incorrect Please Try Again")
			attempt += 1
		return False

	def save_data(self):
		with open(self.settings.pokemon_location, 'w') as file:
			json.dump(self.settings.pokemon, file)

	def find_pokemon(self, pokemon):
		pokedex = self.settings.pokemon
		if pokemon in pokedex:
			print("\nPokemon Found")
			print(f"Name : {pokemon}")
			print(f"Type : {pokedex[pokemon]['type'].title()}")
			print(f"Weakness : {pokedex[pokemon]['weakness'].title()}")
			return True
		else:
			print("Pokemon Doesnt Exists")

			
	def option(self):
		while self.settings.active == True:
			system("cls")
			print(f"{self.name} {self.settings.menu}")
			a = input("Option : ").lower()
			if a == 'q':
				self.settings.active = False
			elif a == '1':
				system('cls')
				pokemon = self.settings.pokemon
				print(f"{self.name} Pokédex")
				for pokemon, Type in pokemon.items():
					print(f"\nPokemon: {pokemon} \nType:\t {Type['type'].title()}\nWeakness:{Type['weakness'].title()}")
				input("\nPress Enter To Return")
			elif a == '2':
				system('cls')
				Name = input("What is The Pokemon Name : ").title()
				self.find_pokemon(Name)
				input("\nPress Enter to Return")
			elif a == '3':
				system('cls')
				pokemon = input("Pokemon : ").title()
				type = input("Type : ").title()
				try:
					if type == "Water":
						weakness = "Grass"
					elif type == "Grass":
						weakness = "Fire"
					elif type == "Fire":
						weakness = "Water"
					elif type == "Rock":
						weakness = "Water"
					elif type == "Electric":
						weakness = "Rock"
					elif type == "Fighting":
						weakness = "Flying"
					elif type == "Dark":
						weakness = "Fighting"
					elif type == "Normal":
						weakness = "Fighting"
					elif type == "Flying":
						weakness = "Electric"
					else:
						nvi
					Pokedex = Pokemon(pokemon, type, weakness)
					self.settings.pokemon[Pokedex.pokemon] = {
						"type" : Pokedex.type,
						"weakness" : Pokedex.weakness
					}
					self.save_data()
					time.sleep(2)
					print("Gotcha")
					print("Pokemon Have Been Saved To Your Pokédex.")
					input("\nPress Enter to Return")
				except:
					print(f"{type} Type Didn't Exist")
					input("\nPress Enter to Return")
			elif a == '4':
				system('cls')
				evolve = input("Who is Evolving : ").title()
				if self.find_pokemon(evolve):
					print(f"Pokemon Evolve Into (Press Q To Quit)?\n1.Name\n2.Type")
					option = input("Which data do you want to edit / update (1/2) ? ").upper()
					if option == "1":
						old_version = self.settings.pokemon[evolve]
						new_version = input("New Name : ").title()
						self.settings.pokemon[new_version] = {
						"type" : old_version['type'],
						"weakness" : old_version["weakness"],
						}
						del self.settings.pokemon[evolve]
						self.save_data()
						print("Your Pokemon is Evolving")
						time.sleep(3)
						print("Congratulation Your Pokemon Has Been Evolved.\n")
						input("Press Enter To Return")
					elif option == "2":
						old_version = self.settings.pokemon[evolve]
						new_type = input("New Type : ").title()
						try:
							if new_type == "Water":
								weakness = "Grass"
							elif new_type == "Grass":
								weakness = "Fire"
							elif new_type == "Fire":
								weakness = "Water"
							elif new_type == "Rock":
								weakness = "Water"
							elif new_type == "Electric":
								weakness = "Rock"
							elif new_type == "Fighting":
								weakness = "Flying"
							elif new_type == "Dark":
								weakness = "Fighting"
							elif new_type == "Normal":
								weakness = "Fighting"
							elif new_type == "Flying":
								weakness = "Electric"
							else:
								nijfoi
							old_version["weakness"] = weakness
							old_version["type"] = new_type
							self.save_data()
							print(f"Congratulation {evolve} Became {new_type} Type Pokemon")
							input("Press Enter To Return")
						except:
							print(f"{new_type} Type Didn't Exist")
							input("Press Enter To Return")

			elif a == '5':
				system('cls')
				pokemon = input("Pokemon : ").title()

				if self.find_pokemon(pokemon):
					confirm = input(f"Are You Sure Want To End Your Relation With {pokemon} (Y/N) : ")
					if confirm.upper() == "Y":
						del self.settings.pokemon[pokemon]

						self.save_data()
						print(f"Your Relation With {pokemon} Have Ended.")
					if confirm.upper() == "N":
						print(f"Hopefully You Can Have Great Relation With {pokemon}")
				input("Press Enter To Return.")

	def run (self):
		system('cls')
		self.data()
		print("Welcome To Pokédex.\nPlease Login!")
		self.login()
		while self.settings.active == True:
			self.option()
if __name__ == '__main__':
	project = Pokedex()
	project.run()