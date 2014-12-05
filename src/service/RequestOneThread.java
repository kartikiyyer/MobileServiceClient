package service;

import java.net.URLEncoder;
import java.util.Random;


public class RequestOneThread extends Thread {
	public int algorithm;
	public int interval;
	String server = "locahost";
	String client  = "localhost";
	
	public void run() {
		Random random = new Random();
		for(int i=1;i<=333;i++) {
			//int requestType = random.nextInt(3) + 1;
			int requestType = 1;
			int time = 10;
			System.out.println("Sending request for :" + requestType + " : " + i);
			sendRequest(requestType, algorithm, time);
			try {
				Thread.sleep(random.nextInt(5) * 1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	public void sendRequest(int requestType, int algoIdentifier, int time) {
		
		//System.out.println("requestType: " + requestType);
		
		//System.out.println("algoIdentifier: " + algoIdentifier);
		
		//System.out.println("time: " + time);
		
		//System.out.println("sleep: " + sleep);
		
		String url = "http://"+server+":8080/LoadBalancer/request";
		String charset = "UTF-8";
		int status = 0;
		Random randomCpu = new Random();
		Random randomStorage = new Random();
		Random randomRam = new Random();
		double cpu = 0.0, storage = 0.0, ram = 0.0; 
		
		// Calculate cpu
		cpu = Math.round(randomCpu.nextDouble() * 100.0) / 100.0;
		
		//System.out.println("Cpu: " + cpu);
		
		// Calculate storage
		storage = Math.round(randomStorage.nextDouble() * 5.0 * 100.0) / 100.0;
		
		//System.out.println("Storage: " + storage);
		
		// Calculate ram
		ram =  Math.round(randomRam.nextDouble() * 2.0 * 100.0) / 100.0;
		
		//System.out.println("Ram: " + ram);
		
		try {
			String query = String.format("client=%s&cpu=%s&storage=%s&ram=%s&time=%s&algoIdentifier=%s&requestType=%s", 
			URLEncoder.encode(client, charset),
			URLEncoder.encode(String.valueOf(cpu), charset), 
			URLEncoder.encode(String.valueOf(storage), charset),
			URLEncoder.encode(String.valueOf(ram), charset),
			URLEncoder.encode(String.valueOf(time), charset),
			URLEncoder.encode(String.valueOf(algoIdentifier), charset),
			URLEncoder.encode(String.valueOf(requestType), charset));
			
			System.out.println(query);
			/*HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
			connection.setRequestMethod("POST");
			connection.setDoOutput(true); // Triggers POST.
			connection.setRequestProperty("Accept-Charset", charset);
			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);
			//connection.connect();
			try (OutputStream output = connection.getOutputStream()) {
			    output.write(query.getBytes(charset));
			    output.flush();
			    output.close();
			}

			//status = connection.getResponseCode();
			
			//System.out.println("This is the status from server: "+ status);
		*/	
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	}
	

}
