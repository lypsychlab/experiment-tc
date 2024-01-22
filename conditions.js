const list1 = [
  {
    "choice": "round",
    "round": 100,
    "truth": 88,
    "exact": 94,
    "spread": -6,
    "valence": -1,
    "consequential": 1,
    "consequence": -6
  },
  {
    "choice": "round",
    "round": 100,
    "truth": 88,
    "exact": 99,
    "spread": -11,
    "valence": -1,
    "consequential": 1,
    "consequence": -11
  },
  {
    "choice": "round",
    "round": 100,
    "truth": 88,
    "exact": 91,
    "spread": -3,
    "valence": -1,
    "consequential": 1,
    "consequence": -3
  },
  {
    "choice": "exact",
    "round": 1000,
    "truth": 958,
    "exact": 995,
    "spread": -37,
    "valence": -1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "exact",
    "round": 1000,
    "truth": 958,
    "exact": 979,
    "spread": -21,
    "valence": -1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "exact",
    "round": 1000,
    "truth": 958,
    "exact": 973,
    "spread": -15,
    "valence": -1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "round",
    "round": 100,
    "truth": 88,
    "exact": 82,
    "spread": 6,
    "valence": 1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "round",
    "round": 100,
    "truth": 88,
    "exact": 77,
    "spread": 11,
    "valence": 1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "round",
    "round": 100,
    "truth": 88,
    "exact": 85,
    "spread": 3,
    "valence": 1,
    "consequential": 0,
    "consequence": 0
  }
]

const list2 = [
  {
    "choice": "exact",
    "round": 100,
    "truth": 88,
    "exact": 94,
    "spread": -6,
    "valence": -1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "exact",
    "round": 100,
    "truth": 88,
    "exact": 99,
    "spread": -11,
    "valence": -1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "exact",
    "round": 100,
    "truth": 88,
    "exact": 91,
    "spread": -3,
    "valence": -1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "round",
    "round": 1000,
    "truth": 958,
    "exact": 995,
    "spread": -37,
    "valence": -1,
    "consequential": 1,
    "consequence": -37
  },
  {
    "choice": "round",
    "round": 1000,
    "truth": 958,
    "exact": 979,
    "spread": -21,
    "valence": -1,
    "consequential": 1,
    "consequence": -21
  },
  {
    "choice": "round",
    "round": 1000,
    "truth": 958,
    "exact": 973,
    "spread": -15,
    "valence": -1,
    "consequential": 1,
    "consequence": -15
  },
  {
    "choice": "round",
    "round": 1000,
    "truth": 958,
    "exact": 921,
    "spread": 37,
    "valence": 1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "round",
    "round": 1000,
    "truth": 958,
    "exact": 937,
    "spread": 21,
    "valence": 1,
    "consequential": 0,
    "consequence": 0
  },
  {
    "choice": "round",
    "round": 1000,
    "truth": 958,
    "exact": 943,
    "spread": 15,
    "valence": 1,
    "consequential": 0,
    "consequence": 0
  }
]

const lists = [list1, list2]
const ratios = [0.02, 0.01]

const which_list = Math.floor(Math.random() * 2)

const conditions = lists[which_list]