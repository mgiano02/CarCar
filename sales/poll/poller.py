import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

# Import models from sales_rest, here.
# from sales_rest.models import Something

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
            print("hi")
            content = json.loads(response.content)
            print(content)
            for auto in content["autos"]:
                AutomobileVO.objects.update_or_create(
                    vin=auto["vin"],
                    defaults={
                    "vin":auto["vin"]
                    }
                )
            # Write your polling logic, here
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
