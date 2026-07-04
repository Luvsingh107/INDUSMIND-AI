import random

from assets import ASSETS
from employees import EMPLOYEES


def generate_work_order():

    asset = random.choice(ASSETS)

    return {
        "asset": asset["id"],
        "equipment": asset["name"],
        "location": asset["location"],
        "technician": random.choice(EMPLOYEES),
        "failure": random.choice(asset["failure_modes"]),
        "priority": random.choice(
            [
                "Low",
                "Medium",
                "High",
            ]
        ),
    }


if __name__ == "__main__":

    for _ in range(5):

        print(generate_work_order())