import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import AutomobileVO

def poll():
    while True:
        print('Service poller polling for data')
        try:
            # Write your polling logic, here

            # Obtain automobile data from inventory
            response = requests.get("http://inventory-api:8000/api/automobiles")
            # Extract json data into usable python code
            content = json.loads(response.content)
            # Loops through each automobile in the list of automobiles obtained from inventory
            for automobile in content["automobiles"]:
                # Updates existing automobile or creates a new automobile using service automobilevo
                AutomobileVO.objects.update_or_create(
                    import_href=automobile["href"],
                    defaults={"vin": automobile["vin"]},
                )
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
