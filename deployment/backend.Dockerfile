# Use Python image
FROM python:3.9

WORKDIR /app

# Copy files to container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the Flask app port
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
