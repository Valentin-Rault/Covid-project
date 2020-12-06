from django.contrib import admin
from .models import WhoData

# Register your models here.


class WhoDataAdmin(admin.ModelAdmin):
    list_display = (
        "date_reported",
        "country",
        "new_cases",
        "cumulative_cases",
        "new_deaths",
        "cumulative_deaths",
    )
    search_fields = ("country",)
    list_filter = ("country",)

    def get_query(self, request):
        queryset = super(WhoDataAdmin, self).get_queryset(request)
        return queryset.order_by("date_reported")


admin.site.register(WhoData, WhoDataAdmin)