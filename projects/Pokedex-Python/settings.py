from user import User
class Settings:
	def __init__(self):
		self.active = False
		self.pokemon_location = "data/pokemon.json"
		self.user_location = "data/user.json"
		self.pokemon = None
		self.users = None
		self.name = None
		self.menu = f"""Pokédex
1. Pokédex
2. Find Pokemon In Pokédex
3. Catch Pokemon Pokédex
4. Evolve Pokemon
5. End Relation With Pokemon
Q. Shutdown
"""