import re
from nltk.stem.porter import PorterStemmer
import numpy as np

stemmer = PorterStemmer()

def tokenize(sentence):
    # ubah ke lowercase, hilangkan tanda baca, dan split
    sentence = re.sub(r"[^\w\s]", "", sentence.lower())
    return sentence.split()

def stem(word):
    return stemmer.stem(word.lower())

def bag_of_words(tokenized_sentence, all_words):
    sentence_words = [stem(w) for w in tokenized_sentence]
    return np.array([1 if w in sentence_words else 0 for w in all_words], dtype=np.float32)
